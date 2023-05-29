import { useState } from "react";
import "./signup.css";
export default function SignupForm() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const UploadProfileImage = (image) => {
    const imageRef = ref(storage, `imageprofile/${image.name + Date.now()}`);
    return uploadBytes(imageRef, image).then((snapshot) => {
      return getDownloadURL(snapshot.ref);
    });
  };

  const sendFormData = async (url) => {
    const response = await fetch("/api/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, profilePic: url }),
    });

    if (response.status === 201) {
      navigate("/login");
    } else {
      alert("User already exists");
    }
  };

  const defaultImage =
    "https://firebasestorage.googleapis.com/v0/b/mernsters.appspot.com/o/imageprofile%2Fchumpinhat.jpeg1669738606266?alt=media&token=a008d56f-b7d4-4922-976d-a73067e36691";

  // function that sends post signup request to backend
  const submitForm = () => {
    if (formData.profilePic === "") {
      sendFormData(defaultImage);
    } else {
      UploadProfileImage(formData.profilePic).then((url) => {
        sendFormData(url);
      });
    }
  };

  return (
    <form className="sign-up-container" onSubmit={submitForm}>
      <input
        type={"text"}
        placeholder={"Username"}
        value={formData.userName}
        onChange={(event) =>
          setFormData({ ...formData, userName: event.target.value })
        }
      />

      <input
        type={"text"}
        placeholder={"Email"}
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <div>
        <input
          type="password"
          placeholder={"Password"}
          value={formData.password}
          onChange={(event) =>
            setFormData({ ...formData, password: event.target.value })
          }
        />
      </div>
      <input
        type={"password"}
        placeholder={"Confirm Password"}
        value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }
      />
    </form>
  );
}

export function Form2() {
  return (
    <form className="signup-form-2">
      <input
        type={"text"}
        placeholder={"First Name"}
        value={formData.firstName}
        onChange={(e) =>
          setFormData({ ...formData, firstName: e.target.value })
        }
      />
      <input
        type={"text"}
        placeholder={"Last Name"}
        value={formData.lastName}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
      />
      <div className="personal-info-container">
        <label>
          Profile pic:
          <input
            type="file"
            id="userImage"
            name="filename"
            onChange={(event) => lastNoSetData(event)}
          />
        </label>
      </div>
    </form>
  );
}

export function Form3() {
  function onChangeValue(event) {
    setFormData({ ...formData, interests: event.target.value });
  }

  function changeBirthday(event) {
    setFormData({ ...formData, birthday: event.target.value });
  }

  const current = new Date().toISOString().split("T")[0];

  return (
    <div className="other-info-container">
      <label>
        Date of birth:
        <input
          onChange={changeBirthday}
          type="date"
          placeholder="Birthday"
          max={current}
        />
      </label>
      <label>
        Gender:
        <div>
          <input
            type="radio"
            value="Female"
            name="gender"
            checked={formData.gender === "Female"}
            onChange={onChangeValue}
          />
          Female
          <input
            type="radio"
            value="Male"
            name="gender"
            checked={formData.gender === "Male"}
            onChange={onChangeValue}
          />
          Male
          <input
            type="radio"
            value="Other"
            name="gender"
            checked={formData.gender === "Other"}
            onChange={onChangeValue}
          />
          Other
        </div>
      </label>
    </div>
  );
}
