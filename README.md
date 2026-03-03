# 🩺 HealthCheck: Personal Health Assessment

HealthCheck is a web application that provides personalized health insights based on a structured question-and-answer system. It helps users understand potential health risks and offers recommendations for lifestyle improvements.

### [View Live Demo] https://v0-new-project-j2bgprzpxzm.vercel.app/ ---

## 🚀 How It Works

1.  **Answer Questions**: Users complete a comprehensive health assessment questionnaire covering various body systems.
2.  **Get Insights**: The application processes the responses and provides personalized health insights, including potential risk indicators.
3.  **Take Action**: Based on the results, users receive recommended activities and lifestyle changes tailored to their health profile.

---

## ✨ Features

* **Comprehensive Assessments**: Covers 11 major health categories:
    * ❤️ Heart Health
    * 🫁 Lung Health
    * 🧪 Liver Health
    * 💧 Kidney Health
    * 🍎 Digestive Health
    * ✋ Skin Health
    * 🧠 Brain Health
    * 🦴 Bone Health
    * 👁️ Eye Health
    * 🦷 Dental Health
    * 👱 Hair Health
* **Personalized Insights**: Delivers custom reports and risk indicators based on user answers.
* **Actionable Advice**: Suggests lifestyle changes and activities to improve health.
* **Health Resources**: Includes quick access to:
    * Health Articles
    * Wellness Tips
    * FAQ Section
* **Contact Options**: Provides direct links to "WhatsApp Doctor" and "Email Developer."

---

## 🖼️ Screenshots

(Add screenshots of your application here to give users a visual preview.)

| Homepage | Assessment Page |
| :---: | :---: |
|  |  |
| **Results Page** | **Health Guide** |
|  |  |

---

## 🛠️ Tech Stack

(List the technologies you used to build this project.)

* **Frontend**: HTML, CSS, JavaScript * **Backend**: * **Database**: ---

## ⚙️ How to Run Locally

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js (if applicable)
* Python (if applicable)
* A code editor (like VS Code)
* A Mapbox access token (set as `NEXT_PUBLIC_MAPBOX_TOKEN` in your .env.local)

### Installation

1.  **Clone the repo:**
    ```sh
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd your-repo-name
    ```
3.  **Install Frontend Dependencies:**
    ```sh
    # (e.g., if using npm)
    npm install
    ```
4.  **Install Backend Dependencies:**
    ```sh
    # (e.g., if using Python)
    pip install -r requirements.txt
    ```
5.  **Setup Environment Variables:**
    ```sh
    # .env.local should have:
    NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
    NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token
    ```

6.  **Run the application:**
    ```sh
    pnpm dev -p 3000
    ```

---

## 🗺️ Territory Game - Getting API Keys

### Step 1: Get Mapbox Token (For Walking Territory Game)

The territory game feature uses Mapbox for live maps. Follow these steps:

1. **Go to Mapbox** → [https://www.mapbox.com/](https://www.mapbox.com/)
2. **Click "Sign up"** and create an account
3. **Once signed in**, go to **Account → Tokens**
4. **Click "Create a token"**
   - Name it: `HealthCheck Territory Game`
   - Check "Public scopes" 
   - Check "Maps : Read"
5. **Copy the token** (starts with `pk.` or `sk.`)
6. **Paste it in `.env.local`**:
   ```
   NEXT_PUBLIC_MAPBOX_TOKEN=pk.eyJ...your_token_here...
   ```

### Step 2: Browser Geolocation Permission

When you open `/territory`:
- Browser will ask permission to access your location
- **Click "Allow"** to enable GPS tracking
- Your walking path will appear on the map in real-time

### Step 3: Test the Territory Feature

1. Login or Register at `/login` or `/register`
2. Go to **Dashboard** → Click **"🌍 Health Territory Challenge"** (blue gradient card)
3. Allow location access
4. Start walking (or simulate by moving your phone)
5. Click **"Save Territory"** to store your walked area
6. Check the **Leaderboard** to see distances

---

## 🔑 All Required API Keys Explained

| Key | Where to Get | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_FIREBASE_*` | [Firebase Console](https://console.firebase.google.com/) | User auth & database |
| `NEXT_PUBLIC_MAPBOX_TOKEN` | [Mapbox Tokens](https://account.mapbox.com/tokens/) | Live maps for territory game |

**Already in your `.env.local` ✓**

---

## 👤 Author

* **Pratham Kumar**
* **GitHub**: [YourGitHubProfile](https://github.com/rajpratham1) * **Email**: [Email Developer](rajpratham40@gmail.com) ---

## 📄 License

This project is licensed under the MIT License - see the `LICENSE.md` file for details.

---



## 🔐 Firestore Rules
By default the remote Firestore database has **secure rules**. During development, to allow the app to read/write user data, configure your Firestore rules with something like:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // allow users to read/write their own documents
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    match /assessments/{docId} {
      allow read, write: if request.auth != null && request.auth.uid == request.resource.data.userId;
    }
    // territory game rules
    match /territories/{userId} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

Make sure to deploy these rules via the Firebase console or CLI.

## 📝 Report Personalization
Users can enter their name on the results page before downloading a report. The input field appears above the download button and the generated file includes the name in its contents and filename.

© 2025 HealthCheck. All rights reserved.
