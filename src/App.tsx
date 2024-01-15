// 3. importar o GlobalStyle e o tema padrao defayult
import { ThemeProvider } from "styled-components";
import { GlobalStyle} from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Publications } from "./pages/Publications";
import { PublicationsProvider } from "./contexts/PublicationsContext";
// import { Header } from "./components/Header";


export default function App() {
  
  return (
    <>
    {/* Estrutura a aplicação envoveldo o global style dentro do Theme Provider */}
    <ThemeProvider theme={defaultTheme}> 
    <GlobalStyle/>
    {/* 7. Criar o contexto da aplicação criando uma pasta contexts com o arquivo
    Context da aplicação e  e importar os componentes da aplicação criados na pasta Page de */}
    <PublicationsProvider> {/*Chama o provider do contexto para compartilhar com toda a aplicação*/}

    <Publications/> {/*de onde foi compartilhado o código do contexto das transações*/}

    </PublicationsProvider>



    </ThemeProvider>
    
    </>
  
  )
}
