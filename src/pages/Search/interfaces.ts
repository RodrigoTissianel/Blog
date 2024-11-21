export interface ISearchForm {
    search: string;
}

export interface ISearchFormProps {
    setForm: React.Dispatch<React.SetStateAction<ISearchForm>>,
    setWord: React.Dispatch<React.SetStateAction<string | undefined>>,
    form: ISearchForm,
}