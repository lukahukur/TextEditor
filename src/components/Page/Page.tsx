import React, { useEffect, useRef } from 'react'

const Page = () => {
	const textBox = useRef<HTMLDivElement>(null)

	return (
		<div
			role={'textbox'}
			contentEditable={true}
			ref={textBox}
			className={
				'w-[816px] h-[1056px] flex bg-white outline-none border border-neutral-300'
			}
		/>
	)
}

export default Page
