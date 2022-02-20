import {FullButton, Label, MdInput, Row, SimpleCard} from "../../components/core";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import userContext from "../../context/UserContext";

const LoginPage = () => {

    const navigator = useNavigate();
    const {dispatch} = useContext(userContext);
    const onLoginHandler = ()=> {
        navigator('/user/dashboard' , {replace:true});
        dispatch({type:'login' , username:'mjn' , token:'mjnmjnmjnmjnmjnmjn123'});
    }


    return (
        <div className="w-full h-screen flex items-center justify-center">
            <form className="w-1/5">
                <SimpleCard>
                    <Row>
                        <h1 className="text-center text-3xl">Login</h1>
                    </Row>
                    <Row>
                        <Label text="username" src="usr"/>
                        <MdInput type="text" text="enter username" name="username" id="usr"/>
                    </Row>
                    <Row>
                        <Label text="password" src="psw"/>
                        <MdInput type="password" text="enter password" name="password" id="psw"/>
                    </Row>
                    <FullButton adClass="mt-3" onClick={onLoginHandler}>
                        login
                    </FullButton>
                </SimpleCard>
            </form>
        </div>
    );
};

export default LoginPage;
