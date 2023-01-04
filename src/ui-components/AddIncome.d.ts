/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AddIncomeInputValues = {
    Field0?: string;
};
export declare type AddIncomeValidationValues = {
    Field0?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AddIncomeOverridesProps = {
    AddIncomeGrid?: FormProps<GridProps>;
    Field0?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AddIncomeProps = React.PropsWithChildren<{
    overrides?: AddIncomeOverridesProps | undefined | null;
} & {
    onSubmit: (fields: AddIncomeInputValues) => void;
    onCancel?: () => void;
    onChange?: (fields: AddIncomeInputValues) => AddIncomeInputValues;
    onValidate?: AddIncomeValidationValues;
} & React.CSSProperties>;
export default function AddIncome(props: AddIncomeProps): React.ReactElement;
