// Copyright (c) 2022-2023 Cloudflare, Inc.
// Licensed under the Apache 2.0 license found in the LICENSE file or at:
//     https://opensource.org/licenses/Apache-2.0

export interface Pipeline {
  /**
   * send recieves an array of javascript objects which are sent
   * into the pipeline for processing via binding
   *
   * @param data The data to be send
   */
  send(data: object[]): Promise<void>
}
