
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { InputTextarea } from "primereact/inputtextarea";
import { InputMask } from "primereact/inputmask";
import { InputText } from "primereact/inputtext";


export default function MyForm() {


    const defaultValues = {
        value: ""
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        alert(JSON.stringify(data))

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className="card">

            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <div className='container'>
                    <Controller
                        name="names"
                        control={control}
                        rules={{
                            required: 'Пустое поле', minLength: {
                                value: 2,
                                message: 'Минимум 2 буквы'
                            },
                            pattern: {
                                value: /^[a-z ,.'-]+$/i,
                                message: 'Только латинские буквы'
                            },
                            setValueAs: v => parseInt(v),
                        }}
                        render={({ field, fieldState }) => (
                            <>
                                <label htmlFor={field.name} className={classNames({ 'p-invalid': errors.value })}>Имя</label>
                                <span className="p-float-label">
                                    <InputText id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                    <label htmlFor={field.name}></label>
                                </span>
                                {getFormErrorMessage(field.name)}
                            </>
                        )}
                    />

                </div>
                <div className='container'>
                    <Controller
                        name="value"
                        control={control}
                        rules={{ required: 'Неправильный номер' }}
                        render={({ field, fieldState }) => (
                            <>
                                <label htmlFor={field.name} className={classNames({ 'p-invalid': errors.value })}>Номер телефона</label>
                                <InputMask
                                    id={field.name}
                                    value={field.value}
                                    className={classNames({ 'p-invalid': fieldState.error })}
                                    onChange={(e) => field.onChange(e.target.value)}
                                    mask="+7-999-999-9999"
                                    placeholder="+7-999-999-9999"
                                />
                                {getFormErrorMessage(field.name)}
                            </>
                        )}
                    />
                </div>
                <div className='container'>
                    <Controller

                        name="description"
                        control={control}
                        className="textarea"
                        rules={{
                            required: 'Пустое поле', minLength: {
                                value: 10,
                                message: 'Минимум 10 символов'
                            }, pattern: {
                                value: /^[а-я ,.'-]+$/i,
                                message: 'Только кириллица'
                            }
                        }}
                        render={({ field, fieldState }) => (

                            <>
                                <label htmlFor={field.name} className={classNames({ 'p-invalid': errors.value })}>Сообщение</label>

                                <InputTextarea id={field.name} {...field} rows={4} cols={30} className={classNames({ 'p-invalid': fieldState.error })} />
                                {getFormErrorMessage(field.name)}
                            </>
                        )}
                    />
                </div>
                <Button label="Submit" type="submit" icon="pi pi-check" />
            </form>
        </div>
    )
}
