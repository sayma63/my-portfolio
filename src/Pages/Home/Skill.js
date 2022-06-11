import React from 'react';

const Skill = () => {
    return (
        <div className='text-center bg-rose-100 rounded p-12'>
            <h1 className='text-5xl text-bold text-blue-800 mb-5'>My Skills</h1>
            <ul class="steps">
  <li data-content="✓" class="step step-primary">HTML</li>
  <li data-content="✓" class="step step-primary">CSS</li>
  <li data-content="✓" class="step step-primary">JavaScript</li>
  <li data-content="✓" class="step step-primary">ReactJs</li>
  <li data-content="✓" class="step step-primary">NodeJs</li>
  <li data-content="✓" class="step step-primary">ExpressJs</li>
  <li data-content="✓" class="step step-primary">MongoDb</li>
</ul>
        </div>
    );
};

export default Skill;