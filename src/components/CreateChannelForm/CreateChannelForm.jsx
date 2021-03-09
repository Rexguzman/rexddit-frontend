import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { CreateChannelFormContainer } from './CreateChannelForm.styled';

import { addChannelRequest, updateUserImg, deleteError } from '../../actions';

import { storage } from '../../firebase';
import { Loading } from '..';

const CreateChannelForm = (props) => {
  const { addChannelRequest, user, error, deleteError } = props;

  //----> Firebase upload img
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploadCompleted, setUploadCompleted] = useState(false);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (image) {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        'state_changed',
        setLoading(true),
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref('images')
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              setUrl(url);
              setLoading(false);
              setUploadCompleted(true);
            });
        }
      );
    } else {
      console.log('error');
    }
  };

  //----> Form logic
  const form = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const addChannelForm = {
      name: formData.get('name'),
      description: formData.get('description'),
      cover: url,
      autor: user.name,
      autorId: user.id,
      autorImg: user.img,
    };
    addChannelRequest(addChannelForm, '/');
  };

  return (
    <CreateChannelFormContainer>
      <form ref={form}>
        <button onClick={handleSubmit}>Crear Canal</button>
        {error ? (
          <h4 className="error-alert">
            ⚠ debes completar todos los campos y subir una imagen de portada
          </h4>
        ) : (
          ''
        )}
        <input
          className="title-input"
          type="text"
          placeholder="Nombre del canal"
          name="name"
          required
          autoComplete="off"
        />
        <textarea
          rows="8"
          className="input_description"
          name="description"
          type="text"
          role="textbox"
          aria-multiline="true"
          placeholder="Descripción"
          required
        ></textarea>
      </form>
      <div className="upload-file-container">
        <input type="file" onChange={handleChange} required />
        {loading ? <Loading /> : ''}
        {uploadCompleted ? (
          <figure>
            <svg viewBox="0 0 512 512" width="35" height="35">
              <path
                fill="green"
                d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
              />
            </svg>
          </figure>
        ) : (
          ''
        )}
        <button
          className="upload-file-button"
          type="button"
          onClick={handleUpload}
        >
          Subir portada
        </button>
      </div>
      <p>Resolución recomendada: 1000x400px (Máximo 1MB)</p>
    </CreateChannelFormContainer>
  );
};

const mapDispatchToProps = {
  addChannelRequest,
  updateUserImg,
  deleteError,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    error: state.error,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateChannelForm);
