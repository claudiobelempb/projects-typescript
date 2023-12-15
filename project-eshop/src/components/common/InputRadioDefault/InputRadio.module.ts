import styled, { css } from 'styled-components';
import { AppType } from 'types/AppType';

export const Container = styled.fieldset`
  display: flex;
  align-items: flex-end;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  gap: 1rem;
  border: none;
`;

export const InputDefaultContainer = styled.input<AppType>`
  border: none;
  ${({ theme, ...props }) => css`
    &[type='text'],
    &[type='email'],
    &[type='password'],
    &[type='number'] {
      /* FLEX DEFAULT */
    

       /*HEIGHT DEFAULT  */
    
    /*WIDTH DEFAULT  */
      padding: 1rem 2rem;
      /* border: 2px solid transparent; */
      /*BORDER DEFAULT */

      /*BORDER DEFAULT */
    
    /*BORDER RADIUS DEFAULT */
    

   


      &::-webkit-calendar-picker-indicator {
        display: none !important;
      }

      ${
        props.disabled &&
        css`
          &:disabled {
            cursor: not-allowed;
            opacity: 0.7;
          }
        `
      }

      outline: none;
      /* border-radius: 0.5rem; */
      font-size: 1.5rem;





        border-radius: 0.5rem;





       /*HEIGHT DEFAULT  */
    
    /*WIDTH DEFAULT  */
    

     /* FLEX DEFAULT */
   

    }


   /* Padding Default */
   
    /* Margin Default */
    
    /*UTILS DEFAULT */
    

    }


    & [type='submit'],
    & [type='select'],
    & [type='reset'] {
      flex-grow: 1;
      /* width: 100%; */
      padding: 1rem 2rem;
      outline: none;
      /* border-radius: 0.5rem; */
      font-size: 1.5rem;

      &:focus {
        /*BORDER DEFAULT */
   
    /*BORDER RADIUS DEFAULT */
    

        border-radius: 0.5rem;
        /* outline: none; */

      }

       /*HEIGHT DEFAULT  */
   
   


    /* FLEX DEFAULT */
    



    /* Padding Default */
    
    /* Margin Default */
    
    /*UTILS DEFAULT */
    
     /*BORDER DEFAULT */
    
    /*BORDER RADIUS DEFAULT */
    
    `}
`;

export const InputCheckboxDefaultContainer = styled(InputDefaultContainer)`
  ${({ theme, ...props }) => css`
    &[type='checkbox'] {
      flex-grow: 0 !important;
    }
  `}
`;

export const InputRadioDefaultContainer = styled(InputDefaultContainer)`
  ${({ theme, ...props }) => css`
    &[type='radio'] {
      flex-grow: 0 !important;
    }
  `}
`;

export const SelectDefaultContainer = styled.select<AppType>`
  ${({ theme, ...props }) => css`
    border: none;
    outline: none;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    /* flex-direction: column; */
    flex-grow: 1;
    /* width: 100%; */
    outline: none;

    outline: none;
    padding: 1rem 2rem;

    border: 1px solid hsla(0, 0%, 40%, 0.4);
    /*HEIGHT DEFAULT  */

    /*WIDTH DEFAULT  */

    /* FLEX DEFAULT */

    /* Padding Default */

    /* Margin Default */

    /*UTILS DEFAULT */

    /*BORDER DEFAULT */

    /*BORDER RADIUS DEFAULT */

    /*BORDER DEFAULT */

    /*BORDER RADIUS DEFAULT */

    /*HEIGHT DEFAULT  */

    /*WIDTH DEFAULT  */
  `}
`;

export const TextAreaDefaultContainer = styled.textarea<AppType>`
  ${({ theme, ...props }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
    outline: none;

    padding: 1rem 2rem;
    border-radius: 1rem;
    border: 1px solid hsla(0, 0%, 40%, 0.4);

    /*HEIGHT DEFAULT  */

    /*WIDTH DEFAULT  */

    /*UTILS DEFAULT */
    /* FLEX DEFAULT */

    /* Padding Default */

    /* Margin Default */

    /*UTILS DEFAULT */

    /*BORDER DEFAULT */

    /*BORDER RADIUS DEFAULT */

    /*HEIGHT DEFAULT  */

    /*WIDTH DEFAULT  */
  `}
`;

export const LabelDefaultContainer = styled.label<AppType>`
  ${({ theme, ...props }) => css`
    display: flex;
    width: max-content;
    font-size: 1.5rem;
  `}
`;
