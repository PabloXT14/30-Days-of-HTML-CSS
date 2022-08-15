import { profileImages } from '../../data/profileImages'
import { FiMessageSquare, FiSearch, FiXCircle } from 'react-icons/fi'
import * as S from './styles'
import { useState } from 'react'

export function SearchBar() {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false)

  function handleOpenSearchModal() {
    setIsSearchModalOpen(true)
  }

  function handleCloseSearchModal() {
    setIsSearchModalOpen(false)
  }

  return (
    <>
      <S.SearchBox>
        <button className="btn-menu">
          <FiMessageSquare />
        </button>
        <input
          type="text"
          placeholder="Search..."
          className="search"
          onFocus={handleOpenSearchModal}
        />
        <button className="btn-search">
          <FiSearch />
        </button>
      </S.SearchBox>

      {isSearchModalOpen && (
        <S.SeachModal>
          <div className="search-modal-header">
            <h3>Search</h3>
            <span onClick={handleCloseSearchModal}>
              <FiXCircle />
            </span>
          </div>

          <div className="search-modal-body">
            {profileImages.map((profile) => {
              return (
                <div
                  className="message"
                  key={Math.floor(Date.now() * Math.random()).toString(36)}
                >
                  <div className="message-avatar">
                    <img src={profile.url} alt={profile.description} />
                  </div>
                  <div className="message-body">
                    <p>New Notification from kate morrison</p>
                    <small>20s ago</small>
                  </div>
                </div>
              )
            })}
          </div>
        </S.SeachModal>
      )}
    </>
  )
}
