/*
 * Copyright (C) 2018 Red Hat, Inc. and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */

import { injectable, postConstruct } from 'inversify';
import { Disposable } from '@theia/core';
import { TaskRunnerRegistry, TaskRunner } from '../common/task-protocol';

@injectable()
export class TaskRunnerRegistryImpl implements TaskRunnerRegistry {

    protected runners: Map<string, TaskRunner>;

    @postConstruct()
    protected init(): void {
        this.runners = new Map();
    }

    registerRunner(runner: TaskRunner): Disposable {
        this.runners.set(runner.type, runner);
        return { dispose: () => this.runners.delete(runner.type) };
    }

    getRunner(type: string): TaskRunner | undefined {
        return this.runners.get(type);
    }
}
