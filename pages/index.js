import React from 'react'
import {Box, Block, Heading, Text} from 'primer-react'
import Octicon, {iconsByName} from '@githubprimer/octicons-react'
import BoxPro from '../src/BoxPro'
import Nav from '../src/Nav'
import Hero from '../src/Hero'
import HiringPromo from '../src/HiringPromo'
import PrimerCSS from '../src/PrimerCSS'
import Divider from '../src/Divider'
import AtomPlugins from '../src/AtomPlugins'
import OcticonsPromo from '../src/OcticonsPromo'
import OpenSource from '../src/OpenSource'
import PrimerReact from '../src/PrimerReact'

export default () => (
  <BoxPro bg='black'>
    <Nav />
    <Hero />
      <Divider my={[5,6]} />
    <HiringPromo />
      <Divider my={[5,6]} />
    <PrimerCSS />
      <Divider my={[5,6]} />
    <PrimerReact />
      <Divider my={[5,6]} />
    <AtomPlugins />
      <Divider my={[5,6]} />
    <OcticonsPromo />
    <OpenSource />
  </BoxPro>
)
