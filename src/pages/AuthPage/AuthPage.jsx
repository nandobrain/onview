import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'
import './AuthPage.jsx'

export default function AuthPage({ setUser }) {
    return (
        <main className="authbody">
            <h1>OnView Login/Sing Up</h1>
            <SignUpForm setUser={setUser} />
            <LoginForm setUser={setUser} />
        </main>
    )
}