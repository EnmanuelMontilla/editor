import React, { Component } from 'react'
import 'codemirror/lib/codemirror.css';
import 'tui-editor/dist/tui-editor.min.css';
import 'tui-editor/dist/tui-editor-contents.min.css';
import { Viewer } from '@toast-ui/react-editor'

class TuiViewer extends Component {

  render() {
    const html = this.props.innerHtml
    return (
      <>
        <Viewer
          previewStyle="horizontal"
          height="400px"
          initialEditType="markdown"
          initialValue={ html }
        />

      </>
    );
  }

}
export default TuiViewer;

