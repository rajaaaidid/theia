/*
 * Copyright (C) 2018 Red Hat, Inc. and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */

import { inject, injectable } from 'inversify';
import { TaskContribution, TaskResolverRegistry } from '../../common/task-protocol';
import { CheTaskResolver } from './che-task-resolver';

@injectable()
export class CheTaskFrontendContribution implements TaskContribution {

    @inject(CheTaskResolver)
    protected readonly cheTaskResolver: CheTaskResolver;

    registerResolvers(resolvers: TaskResolverRegistry): void {
        resolvers.register('che', this.cheTaskResolver);
    }
}
