import { useFetch, useCounter } from "../hooks";
import { LoadingQuote, Quote } from "../03-Examples";


export const Layout = () => {
    const { increment, counter } = useCounter(1)
    const { data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)
    const { author, quote } = !!data && data[0]
    
    return (
        <>
            <h1>Breaking Bad Coutes</h1>
            <hr />
            {
                (isLoading) ? <LoadingQuote/>
                : <Quote author={author} quote={quote} />
                    
            }
            <button 
                className="btn btn-success" 
                onClick={ ()=> increment() }
                disabled={ isLoading }>
                Next Quote
            </button>
        </>
    );
};
