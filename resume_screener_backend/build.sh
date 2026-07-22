#!/usr/bin/env bash
# Install CPU-only PyTorch first (saves ~1.5GB vs GPU version)
pip install torch --index-url https://download.pytorch.org/whl/cpu
# Then install everything else
pip install -r requirements.txt
