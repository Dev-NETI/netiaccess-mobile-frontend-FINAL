'use client'

import ProcessCard from '@/components/auth/register/ProcessCard'
import { useEffect, useState } from 'react'
import ProcessCardProcessIndicator from '@/components/auth/register/ProcessCardProcessIndicator'
import PersonalInfoForm from '@/components/auth/register/PersonalInfoForm'
import AddressForm from '@/components/auth/register/AddressForm'
import EmploymentForm from '@/components/auth/register/EmploymentForm'
import CredentialForm from '@/components/auth/register/CredentialForm'
import ContactForm from '@/components/auth/register/ContactForm'
import VerifyContactForm from '@/components/auth/register/VerifyContactForm'
import ConfirmEnteredDetailForm from '@/components/auth/register/ConfirmEnteredDetailForm'
import { RegisterContext } from '@/stores/RegisterContext'
import * as Yup from 'yup'

function Register() {
    const [currentState, setCurrentState] = useState(1)
    const [traineeData, setTraineeData] = useState({})

    // just log to check if traineedata is updating between forms, uncomment to check
    useEffect(() => {
        // console.log(traineeData);
    }, [traineeData])

    function handleNextProcess() {
        setCurrentState(currentState + 1)
    }

    const activeForm = currentState => {
        switch (currentState) {
            case 1:
                return <PersonalInfoForm /> //this is the right form
                break
            case 2:
                return <AddressForm /> //this is the right form
                break
            case 3:
                return <EmploymentForm />
                break
            case 4:
                return <ContactForm />
                break
            case 5:
                return <VerifyContactForm buttonLabel="Verify" />
                break
            case 6:
                return <CredentialForm />
                break
            default:
                return <ConfirmEnteredDetailForm />
                break
        }
    }

    return (
        <RegisterContext.Provider
            value={{ traineeData, setTraineeData, handleNextProcess, Yup }}>
            <div className="flex flex-col  py-10">
                {/* process indication */}
                <div className="basis-3/12 flex flex-row gap-1 px-2">
                    <ProcessCardProcessIndicator
                        isActive={currentState === 1}
                        processDescription="Personal"
                        processNumber="1"
                    />
                    <ProcessCardProcessIndicator
                        isActive={currentState === 2}
                        processDescription="Address"
                        processNumber="2"
                    />
                    <ProcessCardProcessIndicator
                        isActive={currentState === 3}
                        processDescription="Employment"
                        processNumber="3"
                    />
                    <ProcessCardProcessIndicator
                        isActive={currentState === 4}
                        processDescription="Contact"
                        processNumber="4"
                    />
                    <ProcessCardProcessIndicator
                        isActive={currentState === 5}
                        processDescription="Verify Contact"
                        processNumber="5"
                    />
                    <ProcessCardProcessIndicator
                        isActive={currentState === 6}
                        processDescription="Password"
                        processNumber="6"
                    />
                </div>

                {/* form */}
                <div className="flex flex-col gap-2 mt-5 px-10">
                    {activeForm(currentState)}
                </div>
            </div>
        </RegisterContext.Provider>
    )
}

export default Register
