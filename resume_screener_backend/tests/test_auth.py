from fastapi.testclient import TestClient
from unittest.mock import patch, MagicMock
from app.main import app

client = TestClient(app)

@patch("app.routers.auth.users_col")
def test_register_success(mock_users_col):
    # Mock finding no existing user
    mock_users_col.find_one.return_value = None
    
    # Mock insert success
    mock_result = MagicMock()
    mock_result.inserted_id = "fake-object-id"
    mock_users_col.insert_one.return_value = mock_result

    response = client.post(
        "/auth/register",
        json={
            "name": "Test User",
            "email": "test@example.com",
            "password": "securepassword123",
            "role": "candidate"
        }
    )
    
    assert response.status_code == 201
    data = response.json()
    assert "token" in data
    assert data["role"] == "candidate"
    assert data["name"] == "Test User"

@patch("app.routers.auth.users_col")
def test_register_duplicate_email(mock_users_col):
    # Mock finding an existing user
    mock_users_col.find_one.return_value = {"email": "test@example.com"}

    response = client.post(
        "/auth/register",
        json={
            "name": "Test User",
            "email": "test@example.com",
            "password": "securepassword123",
            "role": "candidate"
        }
    )
    
    assert response.status_code == 409
    assert "already exists" in response.json()["detail"]
