import { PartysTable } from './page/PartysTable';
import { SignIn } from './page/SignIn';
import { SignUp } from './page/SignUp';
import { GlobalStyle } from './styles/globalStyles';

export function App() {

    return (
        <>
            <GlobalStyle />
            <PartysTable />
            {/* <SignIn /> */}
            {/* <SignUp /> */}
        </>
    )
}