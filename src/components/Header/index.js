import React, { useState } from 'react';

import { Link as ReactRouterLink } from 'react-router-dom';

import { Container, Background, Logo, ButtonLink, Feature, Text, TextSmall, TextLink, Group, Picture, Profile, Dropdown, Search, SearchIcon, SearchImage, SearchInput, PlayButton } from './styles';

function Header({ bg = true, children, ...restProps }) {
    return bg ? (
        <Background { ...restProps }> { children }</Background>
    ) : (
        children
    );
};

export default Header;

Header.Feature = function HeaderFeature({ children, ...restProps }) {
    return <Feature { ...restProps }> { children }</Feature>
};

Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text { ...restProps }> { children }</Text>
};

Header.TextSmall = function HeaderTextSmall({ children, ...restProps }) {
    return <TextSmall { ...restProps }> { children }</TextSmall>
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
    return <TextLink { ...restProps }> { children }</TextLink>
};

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container { ...restProps }> { children } </Container>
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group { ...restProps }> { children } </Group>
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReactRouterLink to={ to }>
            <Logo { ...restProps }/>
        </ReactRouterLink>
    );
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <ButtonLink { ...restProps }> { children } </ButtonLink>
}


Header.Picture = function HeaderPicture({ src, ...restProps }) {
    return <Picture { ...restProps } src={`/images/users/${src}.png`} />
}

Header.Profile = function HeaderProfile({ children, ...restProps }) {
    return <Profile { ...restProps }> { children } </Profile>
}

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
    return <Dropdown { ...restProps }> { children } </Dropdown>
}

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
    const [ searchActive, setSearchActive ] = useState(false);

    return (
        <Search { ...restProps }>
            <SearchIcon onClick={ () => setSearchActive(searchActive => !searchActive) }>
                <SearchImage src="/images/icons/search.png" alt="Search" />
            </SearchIcon>
            <SearchInput 
                value={ searchTerm }
                onChange={({ target }) => setSearchTerm(target.value)}
                placeholder="Search films and series"
                active={ searchActive }
            />
        </Search>
    )
}

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
    return <PlayButton { ...restProps }> { children } </PlayButton>
}