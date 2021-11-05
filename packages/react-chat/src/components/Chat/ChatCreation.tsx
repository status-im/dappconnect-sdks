import React, { useState } from "react";
import { Identity } from "status-communities/dist/cjs";
import { bufToHex } from "status-communities/dist/cjs/utils";
import styled from "styled-components";

import { useMessengerContext } from "../../contexts/messengerProvider";
import { ChannelData } from "../../models/ChannelData";
import { CommunityData } from "../../models/CommunityData";
import { buttonStyles } from "../Buttons/buttonStyle";
import { CrossIcon } from "../Icons/CrossIcon";
import { Member } from "../Members/Member";
import { SearchBlock } from "../SearchBlock";
import { textMediumStyles } from "../Text";
interface ChatCreationProps {
  identity: Identity;
  community: CommunityData;
  setMembersList: any;
  setGroupList: any;
  setActiveChannel: (val: ChannelData) => void;
  setCreateChat: (val: boolean) => void;
  editGroup?: boolean;
}

export function ChatCreation({
  identity,
  community,
  setMembersList,
  setGroupList,
  setActiveChannel,
  setCreateChat,
  editGroup,
}: ChatCreationProps) {
  const [query, setQuery] = useState("");
  const [styledGroup, setStyledGroup] = useState<string[]>([]);

  const { contacts } = useMessengerContext();

  const addMember = (member: string) => {
    setStyledGroup((prevMembers: string[]) => {
      if (prevMembers.find((mem) => mem === member)) {
        return prevMembers;
      } else {
        return [...prevMembers, member];
      }
    });
  };

  const removeMember = (member: string) => {
    const idx = styledGroup.indexOf(member);
    setStyledGroup(styledGroup.splice(idx, 1));
  };

  const createChat = (group: string[]) => {
    group.length > 1
      ? (setGroupList((prevGroups: string[][]) => {
          prevGroups.push(group);
          return prevGroups;
        }),
        setActiveChannel({
          id: group.join(""),
          name: group.join(", "),
          type: "group",
        }))
      : (setMembersList((prevMembers: string[]) => {
          if (prevMembers.find((chat) => chat === group[0])) {
            return prevMembers;
          } else {
            return [...prevMembers, group[0]];
          }
        }),
        setActiveChannel({
          id: group[0],
          name: group[0],
          type: "dm",
          description: "Contact",
        }));
    setCreateChat(false);
  };

  return (
    <CreationWrapper>
      <CreationBar>
        <InputBar>
          <InputText>To:</InputText>
          {styledGroup.length > 0 && (
            <StyledList>
              {styledGroup.map((member) => (
                <StyledMember key={member}>
                  <StyledName>{member.slice(0, 10)}</StyledName>
                  <CloseButton onClick={() => removeMember(member)}>
                    <CrossIcon memberView={true} />
                  </CloseButton>
                </StyledMember>
              ))}
            </StyledList>
          )}
          <SearchMembers>
            {styledGroup.length < 5 && (
              <>
                <Input
                  value={query}
                  onInput={(e) => setQuery(e.currentTarget.value)}
                />
                {query && (
                  <SearchBlock
                    community={community}
                    query={query}
                    styledGroup={styledGroup}
                    setStyledGroup={setStyledGroup}
                  />
                )}
              </>
            )}
          </SearchMembers>
          {styledGroup.length === 5 && (
            <LimitAlert>5 user Limit reached</LimitAlert>
          )}
        </InputBar>
        <CreationBtn
          disabled={styledGroup.length === 0}
          onClick={() =>
            editGroup ? setMembersList(styledGroup) : createChat(styledGroup)
          }
        >
          Confirm
        </CreationBtn>
      </CreationBar>
      {!editGroup && !query && styledGroup.length === 0 && (
        <Contacts>
          <ContactsHeading>Contacts</ContactsHeading>
          <ContactsList>
            {contacts
              .filter((e) => e.id != bufToHex(identity.publicKey))
              .map((contact) => (
                <Member
                  key={contact.id}
                  member={contact.id}
                  isOnline={contact.online}
                  onClick={() => addMember(contact.id)}
                />
              ))}
          </ContactsList>
        </Contacts>
      )}
    </CreationWrapper>
  );
}

const CreationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.bodyBackgroundColor};
  padding: 8px 16px;
`;

const CreationBar = styled.div`
  display: flex;
  margin-bottom: 32px;
`;

const InputBar = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.inputColor};
  border: 1px solid ${({ theme }) => theme.inputColor};
  border-radius: 8px;
  padding: 8px 16px;

  ${textMediumStyles}
`;

const Input = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.inputColor};
  border: 1px solid ${({ theme }) => theme.inputColor};
  outline: none;
  resize: none;

  ${textMediumStyles}

  &:focus {
    outline: none;
    caret-color: ${({ theme }) => theme.notificationColor};
  }
`;

const InputText = styled.div`
  color: ${({ theme }) => theme.secondary};
  margin-right: 8px;
`;

const CreationBtn = styled.button`
  padding: 11px 24px;
  margin-left: 16px;
  ${buttonStyles}

  &:disabled {
    background: ${({ theme }) => theme.inputColor};
    color: ${({ theme }) => theme.secondary};
  }
`;

const StyledList = styled.div`
  display: flex;
`;

const StyledMember = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 4px 4px 8px;
  background: ${({ theme }) => theme.tertiary};
  color: ${({ theme }) => theme.bodyBackgroundColor};
  border-radius: 8px;
  margin-right: 8px;
`;

const StyledName = styled.p`
  color: ${({ theme }) => theme.bodyBackgroundColor};

  ${textMediumStyles}
`;

const CloseButton = styled.button`
  width: 20px;
  height: 20px;
`;

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactsHeading = styled.p`
  color: ${({ theme }) => theme.secondary};

  ${textMediumStyles}
`;

export const ContactsList = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchMembers = styled.div`
  position: relative;
  flex: 1;
`;

const LimitAlert = styled.p`
  text-transform: uppercase;
  margin-left: auto;
  color: ${({ theme }) => theme.redColor};
`;
