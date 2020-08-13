import React from "react";
import Wrapper from "../Wrapper";

/* Styles */
import { FormStyled } from "./styles";
import { breakpoints } from "../../styles/theme";

type Props = { title: string };

const SigninForm: React.FC<Props> = ({ title }: Props): JSX.Element => {
   return (
      <FormStyled method="post">
         <Wrapper maxWidth={breakpoints.xs}>
            <h1>{title}</h1>
            <div className="form-field">
               <input id="email" type="email" name="email" required />
               <label htmlFor="email">
                  <span>Email</span>
               </label>
            </div>
            <div className="form-field">
               <input id="password" type="password" name="password" required />
               <label htmlFor="password">
                  <span>Contraseña</span>
               </label>
            </div>
            <button type="submit">Iniciar sesión</button>
         </Wrapper>
      </FormStyled>
   );
};

export default SigninForm;
