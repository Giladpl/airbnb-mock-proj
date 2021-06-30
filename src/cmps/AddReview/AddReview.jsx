import TextField from '@material-ui/core/TextField';
import Rating from '@material-ui/lab/Rating';
import './AddReview.scss'

export const AddReview = ({ review, setReview, onAddReview }) => {
    
    const handleChange = ({ target }) => {
        const field = target.name;
        const value = target.value;
        if(target.type === 'radio') {
            const idx = review.rate.findIndex(rate => rate.property === field);
            if(idx === -1) return;
            review.rate[idx].val = +value;
            setReview({ ...review});
        } else setReview({ ...review, [field]: value })
    }

    return (
        review && <form className='add-review flex-column' onSubmit={onAddReview}>
            <div className='rate flex-between'>
                {review.rate.map((rate, idx) => (
                    <div className='flex-between' key={idx}>
                        <h5>{rate.property}</h5>
                        <Rating 
                            name={rate.property}
                            defaultValue={2.5} 
                            precision={0.5} 
                            value={rate.val} 
                            onChange={handleChange} 
                            size='large' 
                        />
                    </div>
                ))}
            </div>
            <TextField
                label='Description'
                multiline
                rowsMax={8}
                value={review.txt}
                onChange={handleChange}
                name='txt'
                variant='outlined'
            />
            <button>Add Review</button>
        </form>
    )
}

