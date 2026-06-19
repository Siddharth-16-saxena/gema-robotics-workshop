/// <reference types="vite/client" />
import { useMutation } from '@tanstack/react-query';
import { EnquirySchemaType } from '../schemas/enquirySchema';

interface SubmitSuccessResponse {
  success: true;
  message: string;
  data: {
    _id: string;
    name: string;
    email: string;
    phone: string;
  };
}

interface ErrorDetail {
  path: string;
  message: string;
}

interface SubmitErrorResponse {
  success: false;
  errors: ErrorDetail[];
}

const submitEnquiry = async (data: EnquirySchemaType): Promise<SubmitSuccessResponse> => {
  const apiUrl = import.meta.env.VITE_API_URL || '';
  const response = await fetch(`${apiUrl}/api/enquiry`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const responseData = await response.json();

  if (!response.ok) {
    const errorResponse = responseData as SubmitErrorResponse;
    const errorMessage =
      errorResponse.errors?.[0]?.message || 'Registration failed. Please check your details.';
    throw new Error(errorMessage);
  }

  return responseData as SubmitSuccessResponse;
};

export const useEnquiry = () => {
  return useMutation<SubmitSuccessResponse, Error, EnquirySchemaType>({
    mutationFn: submitEnquiry,
  });
};
