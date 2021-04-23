import { Main } from './page/Main';
import { SignIn } from './page/SignIn';
import { SignUp } from './page/SignUp';
import { GlobalStyle } from './styles/globalStyles';

export function App() {

    return (
        <>
            <GlobalStyle />
            {/* <Main /> */}
            {/* <SignIn /> */}
            <SignUp />
        </>
    )
}