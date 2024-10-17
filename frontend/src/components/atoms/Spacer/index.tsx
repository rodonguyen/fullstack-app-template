import React from 'react'
import styled from 'styled-components'

const Container = styled.div<{
	top: number
	bottom: number
	left: number
	right: number
}>`
	margin-top: ${(props) => props.top * 4}px;
	margin-bottom: ${(props) => props.bottom * 4}px;
	margin-left: ${(props) => props.left * 4}px;
	margin-right: ${(props) => props.right * 4}px;
`

const Spacer = ({
	children,
	top = 0,
	bottom = 0,
	left = 0,
	right = 0
}: {
	children: React.ReactNode | React.ReactNode[]
	top?: number
	bottom?: number
	left?: number
	right?: number
}) => (
	<Container top={top} bottom={bottom} left={left} right={right}>
		{children}
	</Container>
)

export default Spacer
