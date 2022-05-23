import { useState } from 'react';

export const useForm = (initialForm, validationForm) => {
  const [form, setform] = useState(initialForm);
  const [errorForm, seterrorForm] = useState({});
  const [loading, setloading] = useState(false);

  const urlForm = 'https://formsubmit.co/ajax/arnoldcrzdev@gmail.com';
  const dataform = form;

  const dataFetch = (url, data) => {
    try {
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((ok) => console.log('Success:', ok));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({
      ...form,
      [name]: value,
    });
  };

  const handleFocus = (e) => {
    let parent = e.target.parentNode.parentNode;
    parent.classList.add('focus');
  };

  const handleBlur = (e) => {
    let parent = e.target.parentNode.parentNode;
    if (e.target.value === '') {
      parent.classList.remove('focus');
    }
    handleChange(e);
    seterrorForm(validationForm(form));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    seterrorForm(validationForm(form));

    if (Object.keys(errorForm).length === 0) {
      setloading(true);
      dataFetch(urlForm, dataform);
      setTimeout(() => {
        setloading(false);
        setform(initialForm);
      }, 1000);
    } else {
      return;
    }
  };

  return {
    form,
    errorForm,
    loading,
    handleBlur,
    handleChange,
    handleSubmit,
    handleFocus,
  };
};
