import * as React from 'react';
import './styles.scss';
export declare type IRegistrationFormProps = {
    sourceType: string;
    sourceId: string;
};
export declare type IInputData = {
    name: string;
    value: string;
};
export declare type IFormData = {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    privacy: boolean;
};
declare const App: React.FC<IRegistrationFormProps>;
export default App;
