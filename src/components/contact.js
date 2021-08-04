import React, {useState} from 'react';
import {useForm} from 'react-hook-form';


//const FAKE_GATEWAY_URL = "https://45m4q1dgcd.execute-api.eu-west-3.amazonaws.com/deployContactForm";
const FAKE_GATEWAY_URL = "https://formspree.io/f/xqkwyybz";
const required = "This field is required";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async data => {
    try {
      await fetch(FAKE_GATEWAY_URL, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
      setSubmitted(true);
      reset();
    } catch (error) {
      setError(
        "submit",
        "submitError",
        `Oops! There seems to be an issue! ${error.message}`
      );
    }
  };

  const showSubmitError = msg => <p className="msg-error">{msg}</p>;

  const { onChange, ...rest } = register("name");
  
  const showThankYou = (
    <div className="msg-confirm">
      <p>Awesome! Your message was sent.</p>
      <button type="button" onClick={() => setSubmitted(false)}>
        Send another message?
      </button>
    </div>
  );

  const showForm = (
    <form onSubmit={handleSubmit(onSubmit)} method="post" className="contactForm">
      <label htmlFor="name" className="formLabel">
        <h5>Name</h5>
        <input
            className="formInput"
          {...register("name", { required: true })} 
        />
        {errors.name && <div className="msg-error">{errors.name.message}</div>}
      </label>

      <label htmlFor="email" className="formLabel">
        <h5>Email</h5>
        <input
            className="formInput"
          type="email"
          name="email"
          id="email"
          placeholder="your@email.address"
          {...register("email", { required: true })} 
        />
        {errors.email && (
          <div className="msg-error">{errors.email.message}</div>
        )}
      </label>

      <label htmlFor="question" className="formLabel">
        <h5>Message</h5>
        <textarea
        className="formInput"
          name="question"
          id="question"
          rows="3"
          placeholder="Your message"
          {...register("question", { required: true })} 
        />
        {errors.question && (
          <div className="msg-error">{errors.question.message}</div>
        )}
      </label>

      <div className="submit-wrapper">
        <button type="submit">
          Send
        </button>
      </div>
    </form>
  );

  return (
    <div className="page contact-page">
      <div className="text-side">
        {errors && errors.submit && showSubmitError(errors.submit.message)}
      </div>
      <div className="form-side">{submitted ? showThankYou : showForm}</div>
    </div>
  );
};


export default Contact;