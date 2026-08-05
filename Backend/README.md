# Muhammad Shafay - Backend & AI/ML Projects

This directory is organized for your backend service configurations, machine learning models, and AI script files.

## Recommended Project Structure

Here is a clean layout you can use to organize your backend scripts and models:

```text
Backend/
├── apps/               # Python apps (e.g., Streamlit, Flask Web APIs)
│   ├── chatbot/        # General Health Query Chatbot
│   └── analytics/      # Football Analytics & CV apps
├── models/             # Custom model weights (YOLOv8, YOLOv11, PyTorch)
├── data/               # SQLite databases & ChromaDB Vector Stores
├── scripts/            # Preprocessing, annotations & automation scripts
├── requirements.txt    # Python dependencies list
└── README.md           # Setup and execution guide
```

## Quick Start Guide

### 1. Set Up Python Virtual Environment
Navigate to the `Backend` directory and initialize a virtual environment:
```bash
python -m venv venv
```

### 2. Activate the Environment
*   **Windows (PowerShell):**
    ```powershell
    .\venv\Scripts\Activate.ps1
    ```
*   **Windows (Command Prompt):**
    ```cmd
    .\venv\Scripts\activate.bat
    ```
*   **macOS / Linux:**
    ```bash
    source venv/bin/activate
    ```

### 3. Install Technical Stack
Install the required machine learning, database, and backend frameworks:
```bash
pip install -r requirements.txt
```
