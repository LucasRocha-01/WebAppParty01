import { ValidationError } from 'yup';

interface ValidationErrorProps {
    [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): ValidationErrorProps {
    const validationErrors: ValidationErrorProps = {};

    err.inner.forEach(error => {
        validationErrors[error.path] = error.message;
    });

    return validationErrors;
}