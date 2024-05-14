const formData = {
    email: "",
    message: ""
};

const form = document.querySelector(".feedback-form");


const getFormData = localStorage.getItem("feedback-form-state");
const parseFormData = JSON.parse(getFormData);


if (parseFormData) {
    form.elements.email.value = parseFormData.email;
    form.elements.message.value = parseFormData.message;

    formData.email = parseFormData.email;
    formData.message = parseFormData.message;
} else {
    form.elements.email.value = "";
    form.elements.message.value = "";
}


form.addEventListener("input", handleInput);
function handleInput(event) {
    if (event.target.name === "email") {
        formData.email = event.target.value;
    } else if (event.target.name === "message") {
        formData.message = event.target.value;
    }

    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}


form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault()
    if (!form.elements.email.value || !form.elements.message.value) {
        event.preventDefault();
        alert("Please fill in all fields.");
    } else {
        localStorage.setItem("feedback-form-state", JSON.stringify(formData));
        
        console.log("Form Data:", formData);

        
        formData.email = "";
        formData.message = "";
    }
}
