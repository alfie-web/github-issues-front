import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setRepoData } from '../../../../store/actions/issues'
import Input from '../../../../components/Input'
import Button from '../../../../components/Button'

const SearchForm = () => {
   const dispatch = useDispatch()
   const repoData = useSelector((state) => state.issues.repoData)

   const [formData, setFormData] = useState(repoData)

   const onChange = (e) => {
      setFormData((prev) => ({
         ...prev,
         [e.target.name]: e.target.value,
      }))
   }

   const onSearch = () => {
      dispatch(setRepoData(formData))
   }

   return (
      <div className="Issues__form">
         <Input
            value={formData.userName}
            placeholder="User name"
            name="userName"
            onChange={onChange}
         />

         <Input
            value={formData.repoName}
            placeholder="Repo name"
            name="repoName"
            onChange={onChange}
         />

         <Button
            onClick={onSearch}
            variant="black"
            icon={(
               <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     fillRule="evenodd"
                     clipRule="evenodd"
                     d="M4.24531 1.50172C5.8056 0.520492 7.63411 0 9.50001 0C12.0006 0.000149786 14.4101 0.934574 16.1956 2.61509C17.9832 4.29755 18.9998 6.59281 19 8.99993C19 10.794 18.4344 12.5423 17.3829 14.0234C17.2526 14.2069 17.1157 14.3853 16.9724 14.5582L20.7071 18.2929C21.0976 18.6834 21.0976 19.3166 20.7071 19.7071C20.3166 20.0976 19.6834 20.0976 19.2929 19.7071L15.5361 15.9503C14.8086 16.5173 13.9934 16.9807 13.116 17.3227C11.3877 17.9965 9.48896 18.172 7.65772 17.8292C5.82633 17.4863 4.1363 16.6388 2.80424 15.3851C1.47153 14.1307 0.556404 12.5251 0.184945 10.7675C-0.186633 9.00933 0.00471729 7.18768 0.731751 5.53571C1.4584 3.88461 2.68448 2.48329 4.24531 1.50172ZM9.49995 2C8.00359 2.00001 6.54534 2.4179 5.31002 3.19476C4.07521 3.9713 3.12235 5.06883 2.56231 6.34135C2.00266 7.613 1.85735 9.00841 2.14172 10.3539C2.42621 11.7 3.13018 12.9453 4.17496 13.9287C5.22039 14.9126 6.55948 15.5889 8.02575 15.8634C9.4922 16.1379 11.0116 15.9965 12.3896 15.4593C13.7672 14.9223 14.9351 14.0165 15.7521 12.8657C16.5685 11.7157 17 10.3705 17 9.00007M9.49995 2C11.5079 2.00013 13.4224 2.7515 14.8249 4.07149C16.2253 5.38955 16.9999 7.16383 17 9.00007"
                     fill="white"
                  />
               </svg>
            )}
         />
      </div>
   )
}

export default SearchForm
