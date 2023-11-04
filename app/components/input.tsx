import React, { Component, FC, Fragment } from 'react';

import { useFormik } from 'formik';

interface InputProps {
	label: string;
	placeholder?: string;
	className?: string;
}


const Input: FC<InputProps> (InputProps) => {
	
	const formik = useFormik({
		initialValues: {
			email: '',
			name: '',
			password: '',
		},
		onSubmit: () => {
			setMessage('Form submitted');
			setSubmitted(true);
		},
		validationSchema: yup.object({
			name: yup.string().trim().required('Name is required'),
			email: yup
				.string()
				.email('Must be a valid email')
				.required('Email is required'),
			password: yup.string().min(8, 'min lentgh of pass is 8 char').required('Password is required'),
		}),
	});

	return (
		<>
			<div className="mb-3">
				<label htmlFor="name" className="form-label">
					Name
				</label>
				<input
					type="text"
					name="name"
					className="form-control"
					placeholder="John Doe"
					value={formik.values.name}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				{formik.errors.name && (
					<div className="text-danger">{formik.errors.name}</div>
				)}
			</div>
		</>
	)
}


export default Input;