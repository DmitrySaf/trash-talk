import { SidebarSection } from '@/components/SidebarSection'

import folderIcon from './assets/folder.svg'

import * as Styled from './styled'

export function Folders() {
  function handleAddFolder() {
    console.log('add folder')
  }
  return (
    <SidebarSection title="Folders" onAdd={handleAddFolder}>
      <Styled.Folders>
        <Styled.Folder>
          <Styled.FolderIcon src={folderIcon} alt="folder" />
          <Styled.FolderText>News</Styled.FolderText>
        </Styled.Folder>
        <Styled.Folder>
          <Styled.FolderIcon src={folderIcon} alt="folder" />
          <Styled.FolderText>Family</Styled.FolderText>
        </Styled.Folder>
        <Styled.Folder>
          <Styled.FolderIcon src={folderIcon} alt="folder" />
          <Styled.FolderText>Friends</Styled.FolderText>
        </Styled.Folder>
        <Styled.Folder>
          <Styled.FolderIcon src={folderIcon} alt="folder" />
          <Styled.FolderText>Any</Styled.FolderText>
        </Styled.Folder>
      </Styled.Folders>
    </SidebarSection>
  )
}
