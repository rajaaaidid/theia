/*
 * Copyright (C) 2018 Red Hat, Inc. and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */

import { injectable, inject, named } from 'inversify';
import { ILogger } from '@theia/core';
import { TaskRunner, Task } from '../../common/task-protocol';
import { CheTaskConfiguration } from '../../common/che/task-protocol';

@injectable()
export class CheTaskRunner implements TaskRunner {

    type = 'che';

    @inject(ILogger) @named('task')
    protected readonly logger: ILogger;

    run(options: CheTaskConfiguration, ctx?: string): Promise<Task> {
        this.logger.error(`Running Che Task`);

        return Promise.reject(new Error(`Che Task Runner isn't implemented`));
    }
}
