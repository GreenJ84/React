import React, { useRef } from 'react'
import Card from '../ui/Card'

const css = require('./NewMeetupForm.module.css')

interface meetupFormProps {
    onAddMeetup: Function
}

const NewMeetupForm = (props: meetupFormProps) => {
    const titleInputRef = useRef<HTMLInputElement>(null);
    const imageInputRef = useRef<HTMLInputElement>(null);
    const addressInputRef = useRef<HTMLInputElement>(null);
    const descriptionInputRef = useRef<HTMLTextAreaElement>(null);
    
    function submitHandler(event: React.FormEvent) {
        event.preventDefault();
    
        const enteredTitle = titleInputRef.current?.value;
        const enteredImage = imageInputRef.current?.value;
        const enteredAddress = addressInputRef.current?.value;
        const enteredDescription = descriptionInputRef.current?.value;
    
        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        };
    
        props.onAddMeetup(meetupData);
        }
    return (
            <form onSubmit={submitHandler} className={ css.form }>
                <div className={ css.input }>
                    <label htmlFor='title'>
                        Meetup Title
                    </label>
                    <input type='text' required id='title' ref={titleInputRef} />
                </div>
                <div className={ css.input }>
                    <label htmlFor='image'>
                        Meetup Image
                    </label>
                    <input type='url' required id='image' ref={imageInputRef} />
                </div>
                <div className={ css.input }>
                    <label htmlFor='address'>
                            Address
                    </label>
                    <input type='text' required id='address' ref={addressInputRef} />
                </div>
                <div className={ css.input }>
                    <label htmlFor='description'>
                        Description
                    </label>
                    <textarea id='description' required rows={ 5 } ref={descriptionInputRef}
                        >
                    </textarea>
                </div>
                <div className={ css.submit }>
                    <button>
                        Add Meetup
                    </button>
                </div>
            </form>
    )
}

export default NewMeetupForm