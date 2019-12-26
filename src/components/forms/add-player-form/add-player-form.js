import React from 'react'
import { Formik, Form, Field, FieldArray} from 'formik';
import {connect} from 'react-redux';
import { addPlayers } from '../../../redux/actions/players';
import { Button } from 'antd';
import './add-player-form.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserMinus } from '@fortawesome/free-solid-svg-icons'

const AddForm = ({submit , values}) => {
    return (
        <div>
    <Formik
      initialValues={{ players: ['',''] }}
      onSubmit={(values, {setSubmitting, resetForm}) =>
        setTimeout(() => {
            console.log(values)
            setSubmitting(true);
            submit(values)
            resetForm();
            setSubmitting(false)
          // alert(JSON.stringify(values, null, 2));
        }, 500)
      }
      render={({ values, isSubmitting, handleReset, dirty }) => (
        <Form>
          <FieldArray
            name="players"
            render={arrayHelpers => (
              <div>
                <button type="button" onClick={() => arrayHelpers.push('')}>
                    Add Player
                </button>
                {values.players && values.players.length > 0 ? (
                  values.players.map((player, index) => (
                    <div key={index}>
                      <Field name={`players.${index}`} placeholder={`Player ${index + 1} Name`}/>
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)}
                      >
                        <FontAwesomeIcon icon={faUserMinus} />
                      </button>
                      {/* <button
                        type="button"
                        onClick={() => arrayHelpers.insert(index+1, '')}
                      >
                        +
                      </button> */}
                    </div>
                  ))
                ) : (
                  <button type="button" onClick={() => arrayHelpers.push('')}>
                    Add Player
                  </button>
                )}
                  <div className="form-buttons">
                    <Button type="button" onClick={handleReset} disabled={!dirty || isSubmitting}>
                      Reset
                    </Button>
                    <button type="submit" disabled={isSubmitting} className="btn-item primary-btn">
                      Submit
                    </button>
                    </div>
              </div>
            )}
          />
        </Form>
      )}
    />
        </div>
    )
}


export default connect(null, {addPlayers})(AddForm);