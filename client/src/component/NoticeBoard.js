import { useState, useEffect } from 'react';
import './NoticeBoard.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';
import Axios from 'axios';

function NoticeBoard() {
  const [movieContent, setMovieContent] = useState({
    title: '',
    content: ''
  });
  const [viewContent, setViewContent] = useState([]);
  const [error, setError] = useState(null);
  const [editor, setEditor] = useState(<CKEditor
    editor={ClassicEditor}
    data="T"
    config={{
      toolbar: [
        "heading",
        "|",
        "bold", "italic", "link", "bulletedList", "numberedList", "blockQuote", "ckfinder",
        "|",
        "imageTextAlternative", "imageUpload", "imageStyle:full", "imageStyle:side",
        "|",
        "mediaEmbed", "insertTable", "tableColumn", "tableRow", "mergeTableCells",
        "|",
        "undo", "redo"
      ]
    }}
    onReady={(editor) => {
      console.log("Editor is ready to use!", editor);
    }}
    onChange={(event, editor) => {
      const data = editor.getData();
      console.log({ event, editor, data });
      setMovieContent({
        ...movieContent,
        content: data
      })
    }}
    onBlur={(event, editor) => {
      console.log("Blur.", editor);
    }}
    onFocus={(event, editor) => {
      console.log("Focus.", editor);
    }}
  />);

  useEffect(()=>{
    loadMovieContent();
  },[]);

  const loadMovieContent = async() => {
    try {
      const response = await Axios.get(window.location.origin+'/api/boards');
      setMovieContent({
        title: response.data.existingBoard["title"],
        content: response.data.existingBoard["content"]
      });
    } catch (e) {
      setError(e);
    }
  };

  //editor.props["data"] = movieContent.content;
  console.dir(editor.props["data"]);

  const submitReview = ()=>{
    Axios.post(window.location.origin+'/api/boards', {
      title: movieContent.title,
      content: movieContent.content
    }).then(()=>{
      alert('등록 완료!');
    })
  };

  const getValue = e => {
    const { name, value } = e.target;
    setMovieContent({
      ...movieContent,
      [name]: value
    })
  };


  return (
    <div className="App">
      <h1>Movie Review</h1>
      <div className='movie-container'>
        {viewContent.map(element =>
          <div style={{ border: '1px solid #333' }}>
            <h2>{element.title}</h2>
            <div>
              {parse(element.content)}
            </div>
          </div>
        )}
      </div>
      <div className='form-wrapper'>
        <input className="title-input"
          type='text'
          placeholder='제목'
          onChange={getValue}
          name='title'
        />
        {editor}
      </div>
      <button
        className="submit-button"
        onClick={submitReview}
        >입력
      </button>
    </div>
  );
}

export default NoticeBoard;