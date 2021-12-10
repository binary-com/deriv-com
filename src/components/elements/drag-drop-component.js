import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FileUploader } from 'react-drag-drop-files'
import { localize } from 'components/localization'
import { Flex } from 'components/containers'
import { Text, Header } from 'components/elements'
import DocIcon from 'images/svg/security/doc.svg'
import UploadIcon from 'images/svg/security/upload.svg'

// these styling needed to remove a drop here container shown on hover
const FileUploaderContainer = styled.div`
    height: 100%;

    & > label {
        & > div {
            background-color: unset;
            border: unset;

            & > span {
                display: none;
            }
        }
    }
`

const Items = styled(Flex)`
    justify-content: space-between;
`

const UploadText = styled(Text)`
    font-weight: bold;
`

const UploadContainer = styled(Flex)`
    flex-direction: column;
    border: 2px dashed grey !important;
    border-radius: 10px;
    padding: 25px;
    align-items: center;
`

const FilesContainer = styled.div`
    padding: 10px 0;
`

export const useDragDropFiles = () => {
    const [file, setFile] = useState([])
    return [file, setFile]
}

export const DragDrop = ({ file, setFile }) => {
    const fileTypes = ['PDF']

    const fileExist = (new_file) => {
        for (let i = 0; i < file.length; i++) {
            if (file[i].name === new_file.name) {
                return true
            }
        }

        return false
    }

    const addNewFile = (new_file) => {
        if (!fileExist(new_file)) {
            setFile((current) => [...current, new_file])
        }

        console.log(new_file)
    }

    const removeFile = (file_to_remove) => {
        file.splice(file_to_remove, 1)
        setFile(() => [...file])
        console.log(file)
    }

    return (
        <FileUploaderContainer>
            <FileUploader onDrop={addNewFile} name="file" hoverTitle="test" types={fileTypes}>
                <UploadContainer>
                    <img src={UploadIcon} />
                    <UploadText>{localize('Drop file or click here to upload')}</UploadText>
                </UploadContainer>
            </FileUploader>
            <Header mt="8px" type="small" weight="400">
                {localize('Please keep individual upload size under 20MB.')}
            </Header>
            <FilesContainer>
                {file.length > 0
                    ? file.map((item, idx) => {
                          console.log(idx)
                          return (
                              <Items key={idx}>
                                  <Flex jc="flex-start" ai="center">
                                      <img style={{ marginRight: '8px' }} src={DocIcon} />
                                      <Header type="paragraph-2" weight="400">
                                          {item.name}
                                      </Header>
                                  </Flex>
                                  <Flex jc="flex-end" ai="center">
                                      <Header align="right" type="paragraph-2" weight="400">
                                          {item.size < 1000000
                                              ? `${item.size / 1000}kB`
                                              : `${item.size / 1000000}MB`}
                                      </Header>
                                      <div
                                          style={{ marginLeft: '11px' }}
                                          onClick={() => removeFile(idx)}
                                      >
                                          {'\u2715'}
                                      </div>
                                  </Flex>
                              </Items>
                          )
                      })
                    : 'no files uploaded yet'}
            </FilesContainer>
        </FileUploaderContainer>
    )
}

DragDrop.propTypes = {
    file: PropTypes.object,
    setFile: PropTypes.func,
}
