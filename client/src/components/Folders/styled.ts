import styled from 'styled-components'

export const Folders = styled.div`
  display: flex;
  flex-direction: column;
  height: 144px;
  overflow-y: scroll;
`

export const Folder = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;
`

export const FolderIcon = styled.img`
  width: 28px;
  height: 28px;
`

export const FolderText = styled.p`
  color: black;
`
