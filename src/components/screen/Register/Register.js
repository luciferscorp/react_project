import React from 'react'
import '../../asserts/css/RegisterPage.css'
import Input from '../../common/Input.js'
import Button from '../../common/Button.js'


function RegisterPage() {
  return (
    <div>
      <div class="container">
        <form name="registrationForm" method="get">
        <div>
            <h3>Sign Up</h3>
          </div>
          <div>
            <Input  type="text" id="suername" placeholder="Username"/>
          </div>
          <div>
            <Input  type="email" id="email"  placeholder="Email"/>
          </div>
          <div>
            <Input  type="password" id="password"  placeholder="Password"/>
          </div>
          <div>
            <Input  type="password" id="re-password"  placeholder="Confirm Password"/>
          </div>
          <div>
            <Input  type="password" id="password"  placeholder="Password"/>
          </div>
                   
                            {/* <select name="role" id="selectedrole">
                                <option class="role_text" value="" disabled selected>
                                    <div>Select Role</div>
                                </option>
                                <option value="project_manager">Project Manager</option>
                                <option value="project_leader">Project Leader</option>
                                <option value="employee">Employee</option>
                            </select>
                        </td>
                    </tr>
                </div> */}
          <div>
            <span class="span"></span>
          </div>
          <div>
            <Button type="button" Title="Submit"/>
          </div>
        </form>
    </div>
    </div>
  )
}

export default RegisterPage;
