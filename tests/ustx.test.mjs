import test from 'node:test';import assert from 'node:assert/strict';import {parseUSTX} from '../dist/ustx.mjs';
const fixture=`name: Test
resolution: 480
tempos:
  - {position: 0, bpm: 120}
  - {position: 960, bpm: 60}
tracks:
  - {track_name: Main}
  - {track_name: Harmony}
voice_parts:
  - track_no: 0
    position: 480
    notes:
      - {position: 240, duration: 480, lyric: あ}
  - track_no: 1
    position: 1440
    notes:
      - {position: 0, duration: 480, lyric: な}
`;
test('USTX integrates tempo changes within a note and adds part offset',()=>{const p=parseUSTX(fixture);assert.equal(p.tracks.length,2);assert.equal(p.tracks[0].name,'Main');assert.equal(p.notes[0].start,.75);assert.equal(p.notes[0].end,1.5);assert.equal(p.tracks[1].notes[0].start,2);assert.equal(p.duration,3);});
test('legacy BPM and empty audio tracks',()=>{const p=parseUSTX('bpm: 90\ntracks: [{track_name: Audio}, {track_name: Voice}]\nvoice_parts: [{track_no: 1, position: 0, notes: [{position: 0, duration: 480, lyric: yes}]}]');assert.equal(p.tracks.length,1);assert.equal(p.notes[0].end,2/3);});
test('invalid YAML, tempo and missing notes are rejected',()=>{assert.throws(()=>parseUSTX('tracks: [broken'));assert.throws(()=>parseUSTX(fixture.replace('bpm: 60','bpm: 0')));assert.throws(()=>parseUSTX('tracks: []\nvoice_parts: []'));});
