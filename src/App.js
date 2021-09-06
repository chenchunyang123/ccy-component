// import Button, { ButtonType, ButtonSize } from './components/Button/button';
import Alert from './components/Alert/alert';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Button>Hello</Button>
        <Button disabled>Hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
        <Button btnType={ButtonType.Link} href='http://www.baidu.com' >Baidu</Button>
        <Button btnType={ButtonType.Link} href='http://www.baidu.com' disabled>Baidu</Button> */}
        <Alert title='这是标题' closable>这是内容</Alert>
        <Alert title='这是标题' closable type='danger'>这是内容</Alert>
        <Alert title='这是标题' closable type='success'>这是内容</Alert>
        <Alert title='这是标题' closable type='warning'>这是内容</Alert>
      </header>
    </div>
  );
}

export default App;
