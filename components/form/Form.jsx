import styled from 'styled-components';

import { validationForm } from './validationForm';
import { useForm } from './../../hooks/useForm';

import Loader from '../Loader';

import * as C from '../../styles/variables';

const initialForm = {
  name: '',
  email: '',
  message: '',
};

function Form() {
  const {
    form,
    errorForm,
    loading,
    handleBlur,
    handleChange,
    handleSubmit,
    handleFocus,
  } = useForm(initialForm, validationForm);

  return (
    <WrapperForm>
      <form onSubmit={handleSubmit}>
        <div className="input-div ">
          <div>
            <h5>Nombre</h5>
            <input
              type="text"
              name="name"
              value={form.name}
              required
              onBlur={handleBlur}
              onChange={handleChange}
              onFocus={handleFocus}
              autoComplete="off"
            />
            {errorForm.name && (
              <div className="error">
                <span className="error-name">{errorForm.name}</span>
                <i
                  className="bx bx-error-alt"
                  style={{ color: '#f36e15', fontSize: '1.2rem' }}
                ></i>
              </div>
            )}
          </div>
        </div>
        <div className="input-div ">
          <div>
            <h5>Email</h5>
            <input
              type="email"
              name="email"
              value={form.email}
              required
              autoComplete="off"
              onBlur={handleBlur}
              onFocus={handleFocus}
              onChange={handleChange}
            />
            {errorForm.email && (
              <div className="error">
                <span className="error-name">{errorForm.email}</span>
                <i
                  className="bx bx-error-alt"
                  style={{ color: '#f36e15', fontSize: '1.2rem' }}
                ></i>
              </div>
            )}
          </div>
        </div>
        <div className="input-div ">
          <div>
            <h5>Asunto</h5>
            <input
              type="text"
              name="message"
              value={form.message}
              required
              autoComplete="off"
              onBlur={handleBlur}
              onFocus={handleFocus}
              onChange={handleChange}
            />
            {errorForm.message && (
              <div className="error">
                <span className="error-name">{errorForm.message}</span>
                <i
                  className="bx bx-error-alt"
                  style={{ color: '#f36e15', fontSize: '1.2rem' }}
                ></i>
              </div>
            )}
          </div>
        </div>
        <button type="submit">{loading ? <Loader /> : 'Enviar'}</button>
      </form>
    </WrapperForm>
  );
}

const WrapperForm = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: ${C.COLOR_NEGRO};
  border-radius: 20px;
  margin-bottom: 50px;

  form {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    padding: 2rem;
    margin-bottom: 20px;
    .input-div {
      width: 100%;
      margin: 5px 0;
      padding: 1rem 0;
      border-bottom: 1px solid ${C.COLOR_BLANCO};
    }
    .input-div.focus div h5 {
      top: -20px;
      font-size: 0.7rem;
    }
    .input-div > div {
      position: relative;
      height: 20px;
    }
    .input-div > div > h5 {
      position: absolute;
      top: -5px;
      left: 0;
      transform: translateY(-50%);
      color: ${C.COLOR_BLANCO};
      font-size: 0.9rem;
      transition: 0.3s;
    }
    input {
      position: relative;
      font-size: 1.1rem;
      font-weight: 100;
      top: 10px;
      left: -6px;
      width: 100%;
      color: ${C.COLOR_BLANCO};
    }
    .error {
      display: flex;
      align-items: center;
      margin-top: 20px;
      color: ${C.COLOR_NARANJA};
      font-size: 0.8rem;
      font-weight: 600;

      span {
        margin-left: 5px;
      }

      img {
        margin-left: 5px;
        width: 15px;
        height: 15px;
      }
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      width: 50%;
      height: 50px;
      font-weight: 400;
      font-size: 1.2rem;
      font-family: Poppins;
      border-radius: 10px;
      padding: 0.8rem;
      background-image: linear-gradient(90deg, #f12711 -70%, #f5af19 70%);

      color: ${C.COLOR_BLANCO};

      transition: 0.1s ease;
      margin-bottom: 10px;
      cursor: pointer;
    }
    button:hover {
      background-position: right;
      border: 3px solid ${C.COLOR_BLANCO};
    }
  }
`;

export default Form;
