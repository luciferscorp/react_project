import ReactDOM from "react-dom/client";

import '../../asserts/css/LoginPage.css'
import Input from '../../common/Input.js'
import Button from '../../common/Button.js'

function LoginPage() {
    // const [placeholder1, setplaceholder1] = useState("");

  return (
    <>
      <div class="container">
        <form>
          <div>
            <h3>Login</h3>
          </div>
          <div>
            <Input type="email" id="email" name="username" placeholder="Email"/>
          </div>
          <div>
            <Input  type="password" id="password" name="password" placeholder="Password"/>
          </div>
          <div className="error">
            <span class="spanEnd" id="error"></span>
          </div>
          <div>
            <Button type="button" Title="Submit"/>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginPage;