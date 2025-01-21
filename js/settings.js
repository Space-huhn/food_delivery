const uploadFotoInput = document.querySelector("#changeAvatarImage input");
const previewContainer = document.querySelector(".avatar-preview");
const emailNotificationsForm = document.querySelector(".email-notifications__form");
const logOutButton = document.querySelector("#log-out");
const buttonContainer = document.querySelector(".button-container");

const imageValidation = () => {
    const extensionArray = ["image/jpg", "image/jpeg", "image/svg", "image/webp", "image/png", "image/gif"];

    if (!extensionArray.includes(uploadFotoInput.files[0].type)) {
        alert("Incorrect file format!!!");
        uploadFotoInput.value = "";
        return;
    }

    if (uploadFotoInput.files[0].size > 3 * 1024 * 1024) {
        alert("File is too large!!!");
        return;
    }

    const reader = new FileReader();

    if (uploadFotoInput.files[0]) {
        reader.readAsDataURL(uploadFotoInput.files[0]);
    }

    const previewAvatar = () => {
        previewContainer.style.backgroundImage = `url(${reader.result})`;
    }

    reader.addEventListener("load", previewAvatar);
}
uploadFotoInput.addEventListener("change", imageValidation);

let screenWidth = document.documentElement.clientWidth;

const adaptiveButtonPosition = () => {
    screenWidth = document.documentElement.clientWidth;

    if (screenWidth < 575.98) {
        emailNotificationsForm.append(logOutButton);
    } else {
        buttonContainer.prepend(logOutButton);
    }
}
window.addEventListener("resize", adaptiveButtonPosition);

if (screenWidth < 575.98) {
    adaptiveButtonPosition();
}