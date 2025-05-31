import { Suspense } from 'react';
import TalkContent from './TalkContent';

export default function Talk() {
	return (
		<Suspense fallback={<div>読み込み中...</div>}>
			<TalkContent />
		</Suspense>
	);
}