import { useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useDrag } from 'react-use-gesture'
import { useSpring, animated } from '@react-spring/three'

const Icosahedron = () => {
	// This reference will give us direct access to the mesh
	const mesh = useRef()

	// this ref will give us access to the geometry
	const geometry = useRef()

	const { viewport } = useThree()
	const [spring, set] = useSpring(() => ({
		position: [0, 0, 0],
		rotation: [0, 0, 0.5],
		config: { mass: 3, friction: 40, tension: 800 }
	}))
	const bind = useDrag(
		({ offset: [x, y] }) => {
			const aspect = viewport.factor
			set({
				position: [x / aspect, -y / aspect, 0],
				rotation: [y / aspect, x / aspect, 0]
			})
		},
		{ eventOptions: { pointer: true } }
	)

	// Set up state for the hovered and active state
	const [hovered, setHover] = useState(false)

	// Rotate mesh every frame, this is outside of React without overhead
	useFrame(() => (mesh.current.rotation.y += 0.001))

	return (
		<animated.mesh
			{...spring}
			{...bind()}
			ref={mesh}
			scale={[0.3, 0.3, 0.3]}
			onPointerOver={() => setHover(true)}
			onPointerOut={() => setHover(false)}
		>
			<icosahedronBufferGeometry name="icoGeom" args={[2, 0]} ref={geometry} />
			<meshStandardMaterial
				metalness={0.4}
				roughness={0.5}
				color="#ffffff"
				polygonOffset
				transparent
				opacity={0.5}
				polygonOffsetFactor={1}
				polygonOffsetUnits={1}
			/>
			{geometry.current ? (
				<lineSegments>
					<wireframeGeometry name="wireframeGeom" args={[geometry.current]} />
					<lineBasicMaterial
						color={hovered ? '#000000' : '#666666'}
						depthTest={false}
						opacity={0.25}
						transparent
					/>
				</lineSegments>
			) : null}
		</animated.mesh>
	)
}

export default Icosahedron
