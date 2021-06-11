import { Canvas } from '@react-three/fiber'
import {
	Glitch,
	EffectComposer,
	GodRays,
	Outline,
	ShockWave
} from '@react-three/postprocessing'
import styled from '@emotion/styled'
import Icosahedron from './icosahedron'

const Container = styled('div')`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 1;
	touch-action: none;
`
const Scene = () => {
	return (
		<Container>
			<Canvas
				pixelRatio={window.devicePixelRatio}
				camera={{ fov: 55 }}
				gl={{ physicallyCorrectLights: true }}
			>
				<spotLight
					position={[15, 0, 0]}
					intensity={0.5}
					angle={Math.PI / 2}
					castShadow
					color="#ff0000"
					key={1}
				/>
				<spotLight
					position={[0, 15, 0]}
					intensity={0.5}
					angle={Math.PI / 2}
					castShadow
					color="#7dff00"
					key={2}
				/>
				<spotLight
					position={[0, -15, 0]}
					intensity={0.5}
					angle={Math.PI / 2}
					castShadow
					color="#00ffff"
					key={3}
				/>
				<spotLight
					position={[-15, 0, 0]}
					intensity={0.5}
					angle={Math.PI / 2}
					castShadow
					color="#8503ff"
					key={4}
				/>
				<Icosahedron position={[2, -2, 0]} rotation={[0.25, 0, 0.15]} key={5} />
				<EffectComposer>
					<Glitch delay={[3, 16]} dtSize={0.01} />
				</EffectComposer>
			</Canvas>
		</Container>
	)
}
export default Scene
